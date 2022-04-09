export const FooterStyle ={
    footerbg: {
        background:"green",
    },
    menuAlign:{
        display:"flex",
        flexDirection:"column",
        marginTop:"-0.3rem"
    },
    menuStyle:{
        color:"white",
        textDecoration: "none",
        marginY:"0.3rem",
        '&:hover': {
            color: "green",
            cursor:"pointer",
            background:"white"
         },
        '&.active': {
            color: "green",
            backgroundColor:"white",
            cursor:"pointer",
         },
    },
    socialAlign:{
        display:"flex",
        marginTop:"0.5rem",
    },
    icons:{
        color:"white"
    }
}