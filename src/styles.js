import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
createStyles({
    header:{
        background:'linear-gradient(45deg, #5929ea 24%, #520bafd6 61%)',
    },
    headerBlog:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'200px 0',
    },
    singleBlog:{
        maxWidth:'50%',
    },
    blogHeader:{
        fontSize:'24px',
        color:'white',
        fontFamily:"'Rubik', sans-serif",
    },
    blogHeading:{
        fontSize:'45px',
        fontWeight:'700',
        lineHeight:'50px',
        color:'white',
        paddingTop:'20px',
        fontFamily:"'Rubik', sans-serif",
    },
    blogTitle:{
        color:'#cecece',
        fontSize:'24px',
        fontFamily:"'Rubik', sans-serif",
        paddingTop:'15px',
        lineHeight:'30px',
    },
    blogServiceInfo:{
        display:'flex',
        justifyContent:'left',
        alignItems:'center',
        paddingTop:'30px',
    },
    blogButton:{
        backgroundColor:'transparent',
        border:'1px solid white',
        borderRadius:'5px',
        height:'60px',
        width:'150px',
        color:'white',
        fontWeight:'600',
        fontFamily:"'Rubik', sans-serif",
        transition:'0.3s',
        marginRight:'30px',
        '&:hover':{
            backgroundColor:'white',
            color:'black',
            transition:'0.3s',
            border:'1px solid white',
        }
    },
    videoButton:{
        color:'black',
        backgroundColor:'white',
        padding:'10px',
        height:'60px',
        width:'60px',
        borderRadius:'100%',
        marginRight:'15px',
        cursor:'pointer',
    },
    videoTitle:{
        color:'white',
        fontSize:'17px',
        fontWeight:'500',
        fontFamily:"'Rubik', sans-serif",
    },
    imageBlog:{
        maxWidth:'50%',
    },

    // technology solution blog
    techMainHeader:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
}),
);

export default useStyles