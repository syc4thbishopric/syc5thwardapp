export const config = {
  wardName: "Sycamores 5th Ward",
  apiUrl: "https://api.latterdayward.com/api",
  apiWard: "sycamores-5th",
  apiHeaders: {
    headers: {
      "x-api-key": process.env.LDW_KEY,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: "6611836af50a146457c71744",
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}