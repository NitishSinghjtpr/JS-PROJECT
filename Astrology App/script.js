//zodiac signs
const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

//Based on date, Size 31
const Compliments = [
  "Astrology gives deep insight into human nature.",
  "Astrology beautifully connects the universe with our lives.",
  "Astrology helps people understand themselves better.",
  "Astrology explains life patterns in a meaningful way.",
  "Astrology brings clarity during confusing times.",
  "Astrology is a perfect blend of science and spirituality.",
  "Astrology reveals hidden strengths and talents.",
  "Astrology offers guidance when decisions feel uncertain.",
  "Astrology helps align actions with cosmic timing.",
  "Astrology gives comfort and hope to many people.",
  "Astrology makes us feel connected to the universe.",
  "Astrology highlights our emotional and mental traits.",
  "Astrology encourages self-reflection and growth.",
  "Astrology helps understand relationships deeply.",
  "Astrology explains personality in a unique way.",
  "Astrology brings ancient wisdom into modern life.",
  "Astrology helps people find direction in life.",
  "Astrology promotes balance and self-awareness.",
  "Astrology reveals karmic lessons beautifully.",
  "Astrology inspires spiritual curiosity.",
  "Astrology helps decode life’s challenges.",
  "Astrology offers reassurance during tough phases.",
  "Astrology gives meaning to life events.",
  "Astrology strengthens belief in cosmic order.",
  "Astrology connects mind, soul, and universe.",
  "Astrology helps predict favorable timings.",
  "Astrology supports emotional healing.",
  "Astrology brings positivity and hope.",
  "Astrology enhances self-confidence.",
  "Astrology reflects the beauty of the cosmos.",
  "Astrology helps people trust the journey of life."
];

//size 20

const victimCardCompliment = [
  "You are incredibly strong for surviving what you went through.",
  "Your feelings are valid, and your pain deserves to be acknowledged.",
  "You have shown immense courage in difficult situations.",
  "Even after hardships, you continue to move forward.",
  "Your resilience is truly admirable.",
  "You deserve understanding, compassion, and care.",
  "You have a powerful ability to endure and heal.",
  "Your honesty about your struggles shows great strength.",
  "You are not weak for feeling hurt.",
  "Your experiences have shaped a deep and thoughtful perspective.",
  "You are brave for facing challenges that others may not see.",
  "You carry wisdom earned through hardship.",
  "Your vulnerability is a sign of inner strength.",
  "You deserve peace after everything you have endured.",
  "You have the power to rise beyond past pain.",
  "Your journey shows perseverance and determination.",
  "You are worthy of support and empathy.",
  "You continue to grow despite difficult circumstances.",
  "Your strength inspires quiet respect.",
  "You are stronger than the struggles you have faced."
];

//size 30
const recommendations = [
  "Take a moment to reflect before making important decisions.",
  "Trust your intuition when something feels right.",
  "Focus on personal growth rather than comparison.",
  "Practice patience; good things take time.",
  "Maintain balance between work and rest.",
  "Communicate openly to avoid misunderstandings.",
  "Stay consistent with your efforts.",
  "Embrace change as part of growth.",
  "Set realistic goals and work towards them steadily.",
  "Take care of your mental and emotional health.",
  "Learn from past experiences without dwelling on them.",
  "Surround yourself with positive and supportive people.",
  "Keep an open mind to new opportunities.",
  "Prioritize self-care when feeling overwhelmed.",
  "Stay disciplined, even when motivation is low.",
  "Accept things you cannot control and focus on what you can.",
  "Practice gratitude for small achievements.",
  "Avoid rushing into decisions under pressure.",
  "Be honest with yourself about your needs.",
  "Take breaks to recharge your energy.",
  "Listen more and react less.",
  "Work on improving one habit at a time.",
  "Stay adaptable in changing situations.",
  "Believe in your ability to overcome challenges.",
  "Seek guidance when clarity is needed.",
  "Invest time in learning and self-improvement.",
  "Maintain a healthy routine for long-term success.",
  "Respect your boundaries and protect your peace.",
  "Approach challenges with a calm mindset.",
  "Keep moving forward, even with small steps."
];

//size 20
const predictions = [
  "A new opportunity may appear sooner than you expect.",
  "Positive changes are likely to unfold gradually.",
  "Your efforts will start showing visible results.",
  "An important conversation could bring clarity.",
  "You may feel more confident about your decisions.",
  "Financial stability is likely to improve with patience.",
  "A meaningful connection may grow stronger.",
  "You may discover a hidden talent or interest.",
  "Emotional balance will improve over time.",
  "A long-standing issue may finally get resolved.",
  "You could receive appreciation for your hard work.",
  "Travel or a change in routine may bring fresh energy.",
  "Your creativity is likely to increase.",
  "You may find motivation to start something new.",
  "Support from someone close may surprise you.",
  "A calm mindset will help you overcome challenges.",
  "Your plans may align better than expected.",
  "You may feel more in control of your life.",
  "Good news could arrive unexpectedly.",
  "A phase of personal growth is approaching."
];

const form=document.getElementById('astroForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name=document.getElementById('name').value;
    const Surname=document.getElementById('Surname').value;
    const day=parseInt(document.getElementById('day').value);
    const month=parseInt(document.getElementById('month').value);
    const year=parseInt(document.getElementById('year').value);

    const text=`hii ${name} ${Surname} Your odiac sign is ${zodiacSigns[month-1]} 
    . ${Compliments[day-1]}. ${victimCardCompliment[year%20]}. ${recommendations[(day*month)%30]}.${predictions[(name.length*Surname.length)%20]} `;
    document.getElementById('result').textContent=text;
})