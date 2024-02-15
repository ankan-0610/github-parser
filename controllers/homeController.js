const axios = require("axios");
const githubService = require("../services/githubService");
const fs = require("fs");

exports.home = async (req, res) => {
  if (req.isAuthenticated()) {
    const accessToken = req.user.token;

    try {
      const { repositories, username } =
        await githubService.getUserRepositories(accessToken);

      // Read the template file
      const template = fs.readFileSync("./public/template.html", "utf8");

      // Create HTML for logged-in user with hyperlinked repository names and URLs
      const repoListHtml = repositories
        .map(
          (repo) =>
            `<li><a href="#" onclick="fetchAndDisplayDependencies('${repo.name}', '${accessToken}', '${username}')">${repo.name}</a> </li>`
        )
        .join("");

      // Replace {repoListHtml} in the template with the actual content
      const renderedHtml = template.replace("{repoListHtml}", repoListHtml);

      res.send(renderedHtml);
    } catch (error) {
      console.error(
        "Error fetching user repositories:",
        error.response ? error.response.data : error.message
      );
      res.send("Error fetching user repositories.");
    }
  } else {
    res.send('Welcome! <a href="/auth/login"> Click to Login </a>');
  }
};