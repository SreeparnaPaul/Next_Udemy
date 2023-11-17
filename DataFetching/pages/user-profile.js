import React from "react";

const UserProfilePage = (props) => {
  return <div>{props.username}</div>;
};

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  //   console.log(req); //node js official request and response, we can use it for sending extra headers, cookies
  //   console.log(res);
  return {
    props: {
      username: "Sree",
    },
  };
}
