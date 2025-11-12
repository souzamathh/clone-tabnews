test("GET to /api/v1/status should return 200", async () => {
  const responde = awaitfetch("http:localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
