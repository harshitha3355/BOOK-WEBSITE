import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subtitle from '../components/Subtitle';
import Line from '../components/Line'; // Added import for Line component
import './About.css';

function About() {
    return (
        <>
            <Header />
            <div className='abt-container'>
                <div className='abt-details'>
                    <Subtitle heading="About Me" />
                    <p className="abt-tags">
                        Overthinker | Dreamer | Creator | Learner | Nerd | Maximalist | Perfectionist
                    </p>
                    <p className='abt-text'>
                        Behind this little corner of stories is just me—a book hoarder who
                        thinks paperbacks make the best therapy. Books aren't just words on a
                        page to me; they're my unofficial roommates, teachers, and sometimes
                        even travel guides to worlds I'll never actually visit (unless someone
                        finally invents a portal, in which case, sign me up).
                        <br />
                        <br />
                        I started this space because honestly, I can't keep all the feels,
                        thoughts, and squeals from books bottled up in my head. Whether it's
                        fantasy that makes me forget what sleep is, romance that makes me blush
                        harder than I admit, or non-fiction that leaves me questioning life at
                        2 a.m., I believe there's always a story for every mood.
                        <br />
                        <br />
                        When I'm not stuck between chapters, you'll find me sketching random
                        ideas, sewing things that may or may not end up wearable, crocheting
                        slowly (because counting stitches is serious business), or daydreaming
                        my way into new projects. Also: shopping. Lots of shopping.
                        <br />
                        <br />
                        So, welcome to my little escape hatch. Grab your coffee (or chai, I
                        don't judge), get cozy, and let's dive into stories together.
                    </p>
                    <Subtitle heading="Contact Me" />
                    <form className="contact-form">
                        <label htmlFor="fs">First Name</label>
                        <input  type="text"  placeholder="Enter your first name" id='fs'/>
                        <label htmlFor="ls">Last Name</label>
                        <input  type="text"  placeholder="Enter your last name" id='ls'/>
                        <label htmlFor="em">Email Address</label>
                        <input  type="email"  placeholder="Enter your mail address" id='em'/>
                        <label htmlFor="msg">Your Message</label>
                        <textarea rows="5" placeholder="Enter your question or message" id='msg'></textarea>
                        <button type="submit"> Submit </button>
                    </form>
                </div>
                <Line />
                <div className='abt-image'>
                    <img src="https://i.pinimg.com/736x/1c/56/84/1c56843961efc49bdc8f44d336f5d41b.jpg"  alt="my img" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;