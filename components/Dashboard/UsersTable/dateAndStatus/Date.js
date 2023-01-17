import moment from "moment/moment";
export default function DateDiv ({date}) {

    const formatedDate = moment(date).format("MMM DD, YYYY h:mm a");
    // console.log(formatedDate);
    return(
        <>
            <p>
                {formatedDate}
            </p>
        </>
        
    );
}