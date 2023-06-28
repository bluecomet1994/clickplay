import { createContext, useState } from "react";
import { useRouter } from 'next/router';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const timer = router.pathname.includes("typing-speed-test") ? 30000 : 5000;

  const [data, setData] = useState({
    timer: timer,
    currentTimer: timer,
    clickInsecond: 0,
    score: 0,
    clickType: "jitter", // can be jitter or kohi
    testType: "Click", //  can be Click,SpaceBar,Scroll,Typing
    loading: false,
    bestScore: 0,
    animationLoading: false,
  });

  const [open, setOpen] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [totalTypingText, setTotalTypingText] = useState(0);
  const [totalTypesCorrect, setTotalTypesCorrect] = useState(0);
  const [correctTypesPerBox, setCorrectTypesPerBox] = useState(0);
  const [generatedWords, setGeneratedWords] = useState("");
  const [previosCharBox, setPreviousCharBox] = useState(null);
  const [scrollHighScore, setScrollHighScore] = useState(0);
  const [maximumCharPerBox, setMaximumCharPerBox] = useState(null);
  const [typeHeight, setTypeHeight] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        data,
        setData,
        open,
        setOpen,
        typingText,
        setTypingText,
        totalTypesCorrect,
        setTotalTypesCorrect,
        correctTypesPerBox,
        setCorrectTypesPerBox,
        generatedWords,
        setGeneratedWords,
        previosCharBox, 
        setPreviousCharBox,
        scrollHighScore, 
        setScrollHighScore,
        maximumCharPerBox, 
        setMaximumCharPerBox,
        totalTypingText, 
        setTotalTypingText,
        typeHeight,
        setTypeHeight
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
