"use client";
import { Button, Col, Row } from "antd";

import loginBanner from "../../assets/login.png";
import Image from "next/image";
import From from "@/components/Forms/Forms";
import FormsInput from "@/components/Forms/FormsInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, isLoggedIn, storeUseInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
      }
      storeUseInfo({ accessToken: res?.accessToken });
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginBanner} width={500} alt="" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First Login Your Account
        </h1>
        <div>
          <From submitHandler={onSubmit}>
            <div>
              <FormsInput name="id" type="text" size="large" label="User id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormsInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </From>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
