export async function loadSuggestions({ value, accessToken }) {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${value}`,
    makeReqOpts(accessToken)
  );
  if (response.status !== 200) {
    throw new Error();
  }
  return response.json();
}
function makeReqOpts(accessToken) {
  return accessToken
    ? { headers: { Authorization: `token ${accessToken}` } }
    : {};
}
