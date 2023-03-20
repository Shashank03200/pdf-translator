import translate from "translate-google-api";

async function translateHelper(result) {
  const { data } = result;
  const sentenceList = data.map((obj) => obj.text);
  const translationResult = await translate(sentenceList, {
    to: "hi",
  });

  return translationResult;
}

export default translateHelper;
