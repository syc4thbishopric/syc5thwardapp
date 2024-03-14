export const config = {
  wardName: "Sycamores 5th Ward",
  apiUrl: "https://api.latterdayward.com/api",
  apiWard: "sycamores5th",
  apiHeaders: {
    headers: {
      "x-api-key": process.env.LDW_KEY,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: "65f257c9f50a146457c71732",
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}