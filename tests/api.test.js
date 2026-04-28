test('API handles a simulated request', async () => {
    // We simulate a fetch to your Login.php
    const mockFetch = jest.fn(() =>
        Promise.resolve({
            status: 200,
            json: () => Promise.resolve({ error: "" }),
        })
    );

    const response = await mockFetch('http://localhost/api/Login.php');
    expect(response.status).toBe(200);
});