import homebg from "../../Assets/Images/Homebg.jpg"
export const HomeStyle = {
    mainContainer: {
        padding:"5rem",
    },
    homebg:{
        backgroundImage: `url( ${homebg} )`,
        height:" 82vh ",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "brightness(60%)",
    },
    homeText: {
        color:"white",
        width:"81%",
        position:"absolute",
        top:"30%",
        left: "59%",
        transform: "translateX(-60%)",
    },
    letsMeet:{
        marginTop:"5rem",
        border:"1px solid darkgreen"
    },
    letsMeetImgGrid:{
        height:"40rem",
    },
    letsMeetText:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"start"
    },
    booknowbtn:{
        marginX:"5.7rem"
    },
    workTitle:{
        height: "16rem",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderRight:"1px solid green",
    },
    workDetails:{
        fontSize:"1.9rem",
    }
}