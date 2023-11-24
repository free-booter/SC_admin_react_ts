import styled from 'styled-components'

export const AsiderWrapper = styled.div`
  .asider {
    width: 210px;
    height: 100vh;
    border-right: 1px solid #e8e8e8;
    .top-logo {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 60px;
      padding: 0 10px;
      background-color: #fff;
      border-bottom: 1px solid #e8e8e8;
      box-sizing: border-box;
      .logo {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        margin-left: 10px;
      }
    }
  }
`
