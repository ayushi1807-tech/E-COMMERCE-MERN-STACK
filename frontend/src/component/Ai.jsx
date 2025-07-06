import React, { useState, useContext, useRef } from 'react'
import ai from '../assets/aii.png'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { authDataContext } from '../context/AuthContext'
import { userDataContext } from '../context/Usercontex'

function Ai() {
    let { showSearch, setShowSearch } = useContext(shopDataContext)
    let navigate = useNavigate()
    const { user, isLoggedIn } = useContext(authDataContext)
    const { userData } = useContext(userDataContext)
    const [hasGreeted, setHasGreeted] = useState(false)
    const [activeAi, setActiveAi] = useState(false)

    // Create recognition instance only once
    const recognitionRef = useRef(null)
    if (!recognitionRef.current) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition()
        } else {
            console.log("Speech Recognition Not Supported")
        }
    }
    const recognition = recognitionRef.current

    function speak(message) {
        const utterance = new window.SpeechSynthesisUtterance(message)
        window.speechSynthesis.speak(utterance)
    }

    async function speakAsync(message) {
        return new Promise((resolve) => {
            const utterance = new window.SpeechSynthesisUtterance(message)
            utterance.onend = resolve
            window.speechSynthesis.speak(utterance)
        })
    }

    // Attach event handlers only once
    React.useEffect(() => {
        if (!recognition) return

        recognition.onresult = (e) => {
            const transcript = e.results[0][0].transcript.trim().toLowerCase();

            if ((transcript.includes("search") && transcript.includes("open")) && !showSearch) {
                speak("opening search");
                setShowSearch(true);
                navigate('/collection');
            } else if ((transcript.includes("search") && transcript.includes("close")) && showSearch) {
                speak("closing search");
                setShowSearch(false);
            } else if (
                transcript.includes("collection") ||
                transcript.includes("collections") ||
                transcript.includes("product") ||
                transcript.includes("products")
            ) {
                speak("opening collection page");
                navigate('/collection');
            } else if (transcript.includes("about")) {
                speak("opening about page");
                navigate('/about');
                setShowSearch(false);
            } else if (
                transcript.includes("cart") ||
                transcript.includes("kaat") ||
                transcript.includes("caat")
            ) {
                speak("opening your cart");
                navigate('/cart');
                setShowSearch(false);
            } else if (
                transcript.includes("home") ||
                transcript.includes("homepage")
            ) {
                speak("opening Home Page");
                navigate('/');
                setShowSearch(false);
            } else if (transcript.includes("contact")) {
                speak("opening Contact Page");
                navigate('/contact');
                setShowSearch(false);
            } else if (
                transcript.includes("order") ||
                transcript.includes("myorders") ||
                transcript.includes("orders") ||
                transcript.includes('my order')
            ) {
                speak("opening Your Order Page");
                navigate('/order');
                setShowSearch(false);
            } else if (transcript.includes("login")) {
                if (userData) {
                    speak("You are already logged in");
                } else {
                    speak("opening login page");
                    navigate('/login');
                }
            } else if (
                transcript.includes("register") ||
                transcript.includes("sign up")
            ) {
                if (userData) {
                    speak("You are already registered");
                } else {
                    speak("opening registration page");
                    navigate('/signup');
                }
            } else if (
                transcript.includes("thank you") ||
                transcript.includes("love you")
            ) {
                speak("love you 2 visit again");
            } else {
                toast.error("Try Again");
            }
        }

        recognition.onend = () => {
            setActiveAi(false)
        }
    }, [recognition, showSearch, setShowSearch, navigate, userData])

  return (
    <div>
        <div className='fixed lg:bottom-[20px] 
            md:bottom-[40px] bottom-[80px] left-[2%] '
                onClick={async () => {
                    if (!recognition) {
                        toast.error("Speech Recognition Not Supported");
                        return;
                    }
                    setActiveAi(true)
                    if (!hasGreeted) {
                        await speakAsync('Thank you for visiting');
                        await speakAsync('What should I do for you?');
                        setHasGreeted(true);
                    }
                    recognition.start();
                }}>
                <img src={ai} alt="" className={`w-[100px] cursor-pointer
                 ${activeAi ? 'translate-x-[10%] translate-y-[10%] scale-125'
                        : 'translate-x-[0] translate-y-[0] scale-100'} transition-transform`}
                    style={{
                        filter: `${activeAi ? "drop-shadow(0px 0px 30px #00d2fc)" : "drop-shadow(0px 0px 20px black)"}`
                    }} />
        </div>
    </div>
  )
}

export default Ai
