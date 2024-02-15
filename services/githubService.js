// githubService.js
const axios = require("axios");

exports.getUserRepositories = async (accessToken) => {
  try {
    const response = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const repositories = response.data.map((repo) => {
      return {
        name: repo.name,
        url: repo.html_url, // Using html_url as the repository URL
      };
    });

    const username = response.data[0].owner.login; // Assuming the user has at least one repository

    return { repositories, username };
  } catch (error) {
    throw error;
  }
};
