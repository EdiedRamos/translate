interface TranslateResponse {
  responseData: ResponseData;
}

interface ResponseData {
  translatedText: string;
}

export const TranslateService = {
  async translate(
    currentLang: string,
    targetLang: string,
    text: string
  ): Promise<string> {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=${currentLang}|${targetLang}`
    );
    const data = (await response.json()) as TranslateResponse;
    return data.responseData.translatedText;
  },
};
