const wellnessResponses: { [key: string]: string } = {
  sleep:
    "To improve your sleep, try maintaining a consistent sleep schedule, avoiding screens before bedtime, creating a relaxing bedtime routine, and ensuring your sleeping environment is dark, quiet, and cool. If you're having persistent sleep issues, consider talking to a healthcare professional.",
  stress:
    "Some effective stress management techniques include deep breathing exercises, meditation, regular physical exercise, journaling, time management, and seeking social support from friends and family. Remember, it's okay to ask for help when you're feeling overwhelmed.",
  exercise:
    "For beginners, start with low-impact exercises like walking, swimming, or yoga. You can also try bodyweight exercises such as push-ups, squats, and lunges. Remember to start slowly and gradually increase intensity and duration. Always consult with a doctor before starting a new exercise regimen.",
  diet: "A healthy diet for a college student should include a balance of fruits, vegetables, whole grains, lean proteins, and healthy fats. Try to limit processed foods and sugary drinks. Don't skip meals, and keep healthy snacks on hand for busy days. Stay hydrated by drinking plenty of water throughout the day.",
  motivation:
    "To stay motivated with your wellness goals, set realistic and achievable targets, find activities you enjoy, schedule your wellness activities like appointments, track your progress, reward yourself for achievements, and consider partnering with a friend for accountability.",
  "mental health":
    "Taking care of your mental health is crucial. Some strategies include practicing mindfulness, maintaining social connections, seeking professional help when needed, engaging in activities you enjoy, and maintaining a balanced lifestyle. Remember, it's okay to not be okay, and seeking help is a sign of strength.",
  nutrition:
    "Good nutrition is key to overall wellness. Focus on eating a variety of colorful fruits and vegetables, whole grains, lean proteins, and healthy fats. Try to cook meals at home when possible, and be mindful of portion sizes. If you have specific dietary concerns, consider consulting with a registered dietitian.",
  hydration:
    "Staying hydrated is essential for your health. Aim to drink at least 8 glasses of water a day. You can also get hydration from fruits, vegetables, and herbal teas. Try carrying a reusable water bottle with you and setting reminders to drink water regularly throughout the day.",
  "time management":
    "Effective time management can greatly improve your wellness. Try using a planner or digital calendar to schedule your activities, including time for self-care. Break large tasks into smaller, manageable steps, and don't forget to schedule breaks. Remember, it's okay to say no to commitments that don't align with your priorities.",
  "social wellness":
    "Building and maintaining social connections is important for your overall wellness. Make time for friends and family, join clubs or groups that interest you, volunteer in your community, and don't hesitate to reach out for support when you need it. Remember, quality of relationships often matters more than quantity.",
}

export const getWellnessServiceResponse = async (query: string): Promise<string> => {
  if (!query) {
    throw new Error("Query is required")
  }

  console.log("Processing wellness query:", query)

  const lowercaseQuery = query.toLowerCase()
  let response =
    "I'm here to help with your wellness journey! How can I assist you with your health and fitness goals today?"

  for (const [key, value] of Object.entries(wellnessResponses)) {
    if (lowercaseQuery.includes(key)) {
      response = value
      break
    }
  }

  if (
    response ===
    "I'm here to help with your wellness journey! How can I assist you with your health and fitness goals today?"
  ) {
    response +=
      " You can ask me about topics like sleep, stress, exercise, diet, motivation, mental health, nutrition, hydration, time management, or social wellness."
  }

  console.log("Generated response:", response)
  return response
}

