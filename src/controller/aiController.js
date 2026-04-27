import { GoogleGenerativeAI } from "@google/generative-ai";

export const explainBias = async (req, res) => {
  try {
    const { maleRate, femaleRate } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(`
      Male selection rate: ${maleRate}%
      Female selection rate: ${femaleRate}%
      Explain bias in 2 clear lines.
   Mention which group is disadvantaged.
        Keep it simple and professional.
    `);

    res.json({ text: result.response.text() });

  } catch (err) {
    console.error("Gemini error:", err);   
    res.json({
    text: "AI explanation is temporarily unavailable due to high demand. Based on the data, one group has a lower selection rate, indicating potential bias."
     });
  }
};

export const suggest = async (req, res) => {
  try {
    const { maleRate, femaleRate } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(`
      Male selection rate: ${maleRate}%
      Female selection rate: ${femaleRate}%

      Suggest 3 ways to reduce this bias in real world.

IMPORTANT:
- Use EXACT format below
- Each suggestion must have:
  ✔ Title (2–3 words )
  Short explanation (1 line)
- Keep it clean and professional

Format:
✔ Title 1  
Explanation line  

✔ Title 2  
Explanation line  

✔ Title 3  
Explanation line 
    `);

    res.json({ text: result.response.text() });

  } catch (err) {
    console.error("Gemini error:", err);
      res.json({
        text: `✔ Improve Data  
        Ensure balanced representation in training data  

         ✔ Remove Sensitive Features  
         Avoid using attributes like gender in decisions  

        ✔ Monitor Regularly  
        Continuously track fairness metrics`
  });

    
  }
};