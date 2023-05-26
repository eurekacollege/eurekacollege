// import Input from "@/components/Input"
// import { useState } from "react"
// import styles from "@/styles/connectwithus/ConnectWithUs.module.sass"
// import Navbar from "@/components/Navigation"
// import Footer from "@/components/Footer"
// import ConnectWithUsHeadliner from "@/components/connectwithus/ConnectWithUsHeadliner"
// import Button from "@/components/Button"

// export default function ConnectWithUs() {
//     const [fname, setFname] = useState("")
//     const [lname, setLname] = useState("")
//     const [email, setEmail] = useState("")
//     const [mobile, setMobile] = useState("")
//     const [message, setMessage] = useState("")

//     function handleFnameChange(e) {
//         setFname(e.target.value)
//     }

//     function handleLnameChange(e) {
//         setLname(e.target.value)
//     }

//     function handleEmailChange(e) {
//         setEmail(e.target.value)
//     }

//     function handleMobileChange(e) {
//         setMobile(e.target.value)
//     }

//     function handleMessageChange(e) {
//         setMessage(e.target.value)
//     }

//     return(
//         <>
//             <Navbar/>
//             {/* <ConnectWithUsHeadliner/> */}
//             <div className={styles.container}>
//                 <p className={styles.title}>EUREKA COLLEGE OF CANADA</p>
//                 <div className={styles.inputContainer}>
//                     <div className={styles.subCon1}>
//                         <Input type="text" value={fname} onChangeInput={handleFnameChange} placeholder="*First Name"/>
//                         <Input type="text" value={lname} onChangeInput={handleLnameChange} placeholder="Last Name"/>
//                     </div>
//                     <div className={styles.subCon2}>
//                         <Input type="text" value={email} onChangeInput={handleEmailChange} placeholder="*Email"/>
//                         <Input type="text" value={mobile} onChangeInput={handleMobileChange} placeholder="*Mobile Number"/>
//                     </div>
//                 </div>
//                 <div>
//                     <Input type="textarea" value={message} onChangeTextArea={handleMessageChange} placeholder="Message"/>
//                 </div>
//                 <div className={styles.buttonContainer}>
//                     <Button green={true} style2={styles.but1}>CANCEL</Button>
//                     <Button green={false} style2={styles.but2}>SUBMIT</Button>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//     )
// }

import Input from "@/components/Input"
import { useState } from "react"
import styles from "@/styles/connectwithus/ConnectWithUs.module.sass"
import Navbar from "@/components/Navigation"
import Footer from "@/components/Footer"
import ConnectWithUsHeadliner from "@/components/connectwithus/ConnectWithUsHeadliner"
import Button from "@/components/Button"
import axios from 'axios'
import AlertMessage from "@/components/AlertMessage"

export default function ConnectWithUs() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState("")
    const [submitting, setSubmitting] = useState(false)

    function handleFnameChange(e) {
        setFname(e.target.value)
    }

    function handleLnameChange(e) {
        setLname(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleSubjectChange(e) {
        setSubject(e.target.value)
    }

    function handleMessageChange(e) {
        setMessage(e.target.value)
    }

    /**
     *  First Name: /^[a-zA-Z'-]{2,}$/ which accepts letters, apostrophes and hyphens, and requires at least two characters.
        Last Name: /^[a-zA-Z'-]{2,}$/ which accepts letters, apostrophes and hyphens, and requires at least two characters.
        Email: /\S+@\S+\.\S+/ which checks for a standard email format (username@domain.com).
        Subject: /^.{1,100}$/ which accepts any character and limits the length to no more than 100 characters.
        Message: /^.{1,500}$/ which accepts any character and limits the length to no more than 500 characters.
     */
    function validateInputs() {
        let errors = []
        if (!fname) {
            errors.push("Please enter your first name.")
        } else if (!/^[a-zA-Z'-]{2,}$/.test(fname)) {
            errors.push("Please enter a valid first name.")
        }
        if (!lname) {
            errors.push("Please enter your last name.")
        } else if (!/^[a-zA-Z'-]{2,}$/.test(lname)) {
            errors.push("Please enter a valid last name.")
        }
        if (!email) {
            errors.push("Please enter your email address.")
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.push("Please enter a valid email address.")
        }
        if (!subject) {
            errors.push("Please enter a subject.")
        } else if (!/^.{1,100}$/.test(subject)) {
            errors.push("Please enter a subject with no more than 100 characters.")
        }
        if (!message) {
            errors.push("Please enter a message.")
        } else if (!/^.{1,500}$/.test(message)) {
            errors.push("Please enter a message with no more than 500 characters.")
        }
        // if (!mobile) {
        //     errors.push("Please enter your mobile number.")
        // } else if (!/^\d{10}$/.test(mobile)) {
        //     errors.push("Please enter a valid 10-digit mobile number.")
        // }
        setErrors(errors)
        return errors.length === 0
    }

    function handleCancel() {
        setFname("")
        setLname("")
        setEmail("")
        setSubject("")
        setMessage("")
        setErrors([])
        setSuccess("")
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if(submitting){
            errors.push("Please wait for a moment to send again")
            setSuccess("")
            return
        }
        setSubmitting(true)
        setSuccess("")
        setErrors([])
        if(validateInputs()) {
            const data = {
                fname,
                lname,
                email,
                subject,
                message
            }
            try {
                setSubmitting(true)
                const response = await axios.post('/api/sendemail', data)
                console.log(response)
                    setSuccess('Message sent successfully!')
            } catch (error) {
                if(error.response && error.response.data && error.response.data.message) {
                    console.error(error)
                    setErrors([error.response.data.message]);
                } else {
                    setErrors(['Failed to send message'])
                }
            }
            setFname("")
            setLname("")
            setEmail("")
            setSubject("")
            setMessage("")
            setTimeout(() => {
                setSubmitting(false)
            }, 20000)
        } else {
            setSubmitting(false)
        }

    }

    return(
        <>
            <Navbar/>
            <ConnectWithUsHeadliner/>
            <div className={styles.container}>
                <p className={styles.title}>EUREKA COLLEGE OF CANADA</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        {
                            errors.length > 0 && errors.map((error,idx) => <AlertMessage key={idx} message={error} type="error"/>) 
                        }

                        {
                            success !== "" &&  <AlertMessage message={success} type="success"/>
                        }

                        <div className={styles.subCon1}>
                            <Input type="text" value={fname} onChangeInput={handleFnameChange} placeholder="*First Name"/>
                            <Input type="text" value={lname} onChangeInput={handleLnameChange} placeholder="Last Name"/>
                        </div>
                        <div className={styles.subCon2}>
                            <Input type="text" value={email} onChangeInput={handleEmailChange} placeholder="*Email"/>
                            <Input type="text" value={subject} onChangeInput={handleSubjectChange} placeholder="*Subject"/>
                        </div>
                    </div>
                    <div>
                        <Input type="textarea" value={message} onChangeTextArea={handleMessageChange} placeholder="Message"/>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button green={true} style2={styles.but1} onClick={() => handleCancel}>CANCEL</Button>
                        <Button type="submit" green={false} style2={styles.but2} disabled={submitting}>SUBMIT</Button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context) {
    const isUnderConstruction = true;
  
    if (isUnderConstruction) {
      return {
        redirect: {
          destination: "/underconstruction",
          permanent: false,
        },
      };
    }
  
    return {
      props: {}, // You can pass additional props here if needed
    };
  }