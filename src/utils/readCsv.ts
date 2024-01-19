export const convertCSVtoJson = (csvString: string) => {
  const SEP = ",";
  const dataArr = csvString.split("\r\n");
  const header: String[] = dataArr[0].split(SEP);
  const VALID_COLUMN: Number = header.reduce(
    (acc: Number, curr: String) => (acc as Number) + (curr.length > 0 ? 1 : 0),
    0
  );
  const jsonArr = [];
  for (let i = 1; i < dataArr.length; i++) {
    const lineArr = dataArr[i].split(SEP);
    const obj = {} as { [key: string]: string };
    for (let col = 0; col < VALID_COLUMN; col++) {
      obj[header[col]] = lineArr[col];
    }
    jsonArr.push(obj);
  }
  return jsonArr;
};
