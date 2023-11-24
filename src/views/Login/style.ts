import styled from 'styled-components'

export const LoginWrapper = styled.div`
  .login-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-content {
      display: flex;
      width: 720px;
      height: 380px;
      padding-right: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      .login-left {
        width: 480px;
        border-right: 1px solid #e8e8e8;
        margin-right: 30px;
        background: linear-gradient(
          60deg,
          rgb(var(--primary-6)),
          rgb(var(--primary-3))
        );
        img {
          width: 100%;
          height: 100%;
        }
      }
      .login-right {
        width: 240px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .login-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 40px;
        }
        .form-item {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .forget-pwd {
          padding: 0;
        }
        .login-btn {
          width: 100%;
          height: 40px;
          /* background-color: var(--primary-color); */
        }
        .site-form-item-icon {
          color: #8c8c8c;
        }
      }
    }
  }
`
