import OpenAI from 'openai';
import { openAI_Key } from './constant';

const openAi = new OpenAI({
  apiKey: openAI_Key,
  dangerouslyAllowBrowser: true,
});

export default openAi;