import { getUsersDetails } from "../api/UserdDetails";
import { useRouter } from "next/router";
import userDetails from "../../components/UserDetailPage/UserBio";
import Layout from "../../components/Layout/Layout";
import UserDetails from "../../components/UserDetailPage/UserBio";
export default function User ({User}){
  console.log(User)


    return(
        <div>
          <Layout>
            <UserDetails User={User}/>
          </Layout>
        </div>
    )
}


export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params)
  const { userDetails } = params;
  const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userDetails}`);
  const User = await res.json();
  console.log(User)
  return {
    props: {
      User,
    },
  };
}
