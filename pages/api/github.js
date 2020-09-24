export default async (req.res) => {
  var key = process.env.GITHUB_KEY;
  const headers = {
    Authorization: "Token" + key,
  };

  const url = "https://api.github.com/users/rajajamal/followers";
  const response = await fetch(url, { headers: headers });
  const json = response.json();
  const numFollowers = Object.keys(json).length;

  const url2 = "https://api.github.com/users/rajajamal/repos";
  const response2 = await fetch(url2, { headers: headers });
  const json2 = response2.json();
  const numProjects = Object.keys(json2).length;

  var forksCount = 0;
  json2.forEach((f) => {
    forksCount += f.forks_count;
  });
  return res.status(200).json({
    numFollowers,
    numProjects,
    forksCount,
  });
};
