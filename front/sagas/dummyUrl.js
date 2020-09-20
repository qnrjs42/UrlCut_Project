import shortid from "shortid";
import faker from "faker";
faker.locale = "ko";

export const dummyUrl = (data) => {
  let createDummyUrl = [];
  //   console.log("dummy", data);

  let lastIndex = data.page * data.limit;
  const firstIndex = lastIndex - data.limit;

  try {
    if (lastIndex > data.urlInfoIdsLength) {
      lastIndex = data.urlInfoIdsLength;
    }
  } catch (err) {}

  for (let item = firstIndex; item < lastIndex; item++) {
    const randomDivider = faker.random.number({ min: 0, max: 10 });
    if (item === 0 || item % randomDivider === 0) {
      // 0이거나 랜덤으로 비밀번호 설정
      createDummyUrl.push({
        id: item + shortid.generate(),
        key: "url" + shortid.generate(),
        shortenUrl: "link-project.com/" + shortid.generate(),
        originalUrl: faker.internet.url(),
        urlTitle: faker.name.findName() + " - Google 검색",
        linkOption: ["lock"],
        createdAt: faker.date.recent(),
        clickCount: faker.random.number({ min: 0, max: 500 }),
        urlPassword: "0000",
      });
    } else {
      createDummyUrl.push({
        id: item + shortid.generate(),
        key: "url" + shortid.generate(),
        shortenUrl: "link-project.com/" + shortid.generate(),
        originalUrl: faker.internet.url(),
        urlTitle: faker.name.findName() + " - Google 검색",
        linkOption: ["none"],
        createdAt: faker.date.recent(),
        clickCount: faker.random.number({ min: 0, max: 500 }),
        urlPassword: null,
      });
    }
  }
  return createDummyUrl;
};

export const dummyUrlInfoIds = () => {
  let ids = [];
  for (let item = 0; item < 66; item++) {
    ids.push({
      id: shortid.generate(),
    });
  }

  return ids;
};
export const dummyStorageUrlInfoIds = () => {
  let ids = [];
  for (let item = 0; item < 47; item++) {
    ids.push({
      id: shortid.generate(),
    });
  }

  return ids;
};

export const dummyExpiredUrlInfoIds = () => {
  let ids = [];
  for (let item = 0; item < 21; item++) {
    ids.push({
      id: shortid.generate(),
    });
  }

  return ids;
};

// const dataSource = [
//   {
//     id: shortid.generate(),
//     key: "url" + shortid.generate(),
//     shortenUrl: "kasd2",
//     originalUrl: "zzzz",
//     urlTitle: "아리아나 그란데 - Google 검색",
//     linkOption: ["lock"],
//     createdAt: new Date("2020-09-18 00:00:00"),
//     clickCount: 0,
//     urlPassword: "0000",
//   },
//   {
//     id: shortid.generate(),
//     key: "url" + shortid.generate(),
//     shortenUrl: "kasd1",
//     originalUrl: "zzzz",
//     urlTitle: "not shy - Google 검색",
//     linkOption: [],
//     createdAt: new Date("2020-09-17 22:25:00"),
//     clickCount: 0,
//     urlPassword: null,
//   },
//   {
//     id: shortid.generate(),
//     key: "url" + shortid.generate(),
//     shortenUrl: "kasd2",
//     originalUrl: "zzzz2",
//     urlTitle: "naver - Google 검색",
//     linkOption: [],
//     createdAt: new Date("2020-09-16 22:25:00"),
//     clickCount: 100,
//     urlPassword: null,
//   },
//   {
//     id: shortid.generate(),
//     key: "url" + shortid.generate(),
//     shortenUrl: "kasd3",
//     originalUrl: "zzzz3",
//     urlTitle: "빌리 아일리시 - Google 검색",
//     linkOption: ["lock"],
//     createdAt: new Date("2020-09-09 22:25:00"),
//     clickCount: 30,
//     urlPassword: "0000",
//   },
//   {
//     id: shortid.generate(),
//     key: "url" + shortid.generate(),
//     shortenUrl: "kasd4",
//     originalUrl: "zzzz4",
//     urlTitle: "IU - Google 검색",
//     linkOption: [],
//     createdAt: new Date("2020-08-15 22:25:00"),
//     clickCount: 9,
//     urlPassword: null,
//   },
//   {
//     id: shortid.generate(),
//     key: "url" + shortid.generate(),
//     shortenUrl: "kasd5",
//     originalUrl: "zzzz5",
//     urlTitle: "알파고 - Google 검색",
//     linkOption: [],
//     createdAt: new Date("2019-08-15 22:25:00"),
//     clickCount: 7,
//     urlPassword: null,
//   },
// ];
