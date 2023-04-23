const baseUrl = "https://q01bdun779.execute-api.ap-south-1.amazonaws.com/dev";
const apiKey = "JrQ4AEM36T9yrgjUfSMp8wps4CDjbfaahuPahdpi";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODE1MDAzNjksImRhdGEiOnsiX2lkIjoiNjQzODBiMDE5MDQyMWRiODM2ZGQzY2IxIiwiZmlyc3ROYW1lIjoiQ2hhdGh1cmEiLCJsYXN0TmFtZSI6IlNhbWFyYWplZXdhIiwiZW1haWwiOiJjaGF0aHVyYS5zYW1hcmFqZWV3YTJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJjaGF0aHVyYS5zYW1hcmFqZWV3YTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkeWZHN2pVZC5kMzFPNG5MWExsOUtIZXkxTkQ4Wjc4bGY0eGJ3Zm1pQTZydHMwcVpwUExPdUMiLCJ1c2VyVHlwZSI6Im1vZGVyYXRvciIsImNyZWF0ZWRBdCI6IjIwMjMtMDQtMTNUMTQ6MDA6MzMuNzQwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDQtMTNUMTQ6MDA6MzMuNzQwWiIsIl9fdiI6MH0sImlhdCI6MTY4MTQ5Njc2OX0.LPYOSLG7wL4LvRUU_EDP4vGNu_TXd-LiVSlP7iCDzKI"

export const getAllReviews = async (gameId) => {
  const url = `${baseUrl}/games/${gameId}/reviews`;
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "x-api-key": apiKey,
      "Authorization": `Bearer ${token}`
    },
  });
  return response.json();
}

export const deleteReview = async (gameId, reviewId) => {
  const url = `${baseUrl}/games/${gameId}/reviews/${reviewId}`;
  const response = await fetch(url, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "x-api-key": apiKey,
      "Authorization": `Bearer ${token}`
    },
  });
  return response.json();
}