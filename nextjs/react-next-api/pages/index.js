import {useRef} from "react";

function HomePage() {

    const emailInputRef = useRef();
    const feedbackInputRef = useRef();

    function submitFormHandler(e) {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredFeedback = feedbackInputRef.current.value;

        const reqBody = {
            email: enteredEmail,
            feedback: enteredFeedback,
        }

        fetch('/api/Feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            <h1>Home Page</h1>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor='email'>
                        Your Email Address
                    </label>
                    <input type='email' id='email' ref={emailInputRef}/>
                </div>
                <div>
                    <label htmlFor='feedback'>
                        Your Feedback
                    </label>
                    <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
                </div>
                <button>Send Feedback</button>
            </form>
        </div>
    )
}

export default HomePage;
