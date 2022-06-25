import "./index.css";
import { Form, Input, Button, notification } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { selectLoading } from "./store/selector";
import { loginRequest } from "./store/action";
// import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withTranslation, useTranslation } from "react-i18next";
const LoginComponent = (props) => {
  const { t } = props;
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const onFinish = (values) => {
    const payload = {
      params: {
        userName: "admineh",
        password: "Estella1230",
      },
      navigate,
    };
    if (
      values.userName === payload.params.userName &&
      values.password === payload.params.password
    ) {
      notification.open({
        message: "Đăng Nhập Thành Công",
        icon: <CheckOutlined style={{ color: "green" }} />,
      });
      props.loginAction(payload);
    } else {
      notification.open({
        message: "Đăng Nhập Thất Bại",
        icon: <CloseOutlined style={{ color: "red" }} />,
      });
    }
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="div-full">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        className="formLoginCss"
      >
        <h1>{t("Login")}</h1>
        <Form.Item
          label={t("Username")}
          name="userName"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              min: 5,
              message: "Min 5 character",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("Password")}
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 5,
              message: "Min 5 character",
            },
            {
              max: 30,
              message: "Max 30 character",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {t("SignIn")}
          </Button>
        </Form.Item>
        <img
          src="https://dongphucsongphu.com/la-co-viet-nam-vector-1.png"
          alt=""
          onClick={() => changeLanguage("vi")}
        />
        <img
          src="https://vuongquocanh.com/wp-content/uploads/2018/04/la-co-vuong-quoc-anh.jpg"
          alt=""
          onClick={() => changeLanguage("en")}
        />
      </Form>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
});

//gọi API
const mapDispatchToProps = (dispatch) => ({
  loginAction: (payload) => dispatch(loginRequest(payload)),
});
// const withConnect = connect(mapStateToProps, mapDispatchToProps);
const Login = withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
);

export default Login;
