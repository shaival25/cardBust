const aiFlashCardGeneratorService = require("../services/ai-flashcard-generator.services.cjs");

const generateAIFlashCard = async (req, res) => {
  try {
    const flashcard = await aiFlashCardGeneratorService.generateAIFlashCard(
      req.body.prompt
    );
    return res.status(200).json({
      message: "Flashcard generated successfully",
      success: true,
      data: flashcard,
    });
  } catch (error) {
    console.error(
      "There is an error in generating a flashcard : controller layer",
      error
    ); // For debugging purposes
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = {
  generateAIFlashCard,
};
