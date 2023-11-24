import styled from 'styled-components'

export const MessageWrapper = styled.div`
  .message {
    position: fixed;
    top: 50px;
    left: 50%;
    z-index: 999;
    padding: 10px 20px;
    background: #ffffff;
    box-shadow: 0px 6px 18px 0px rgba(189, 198, 212, 0.3);
    border-radius: 8px;
    border: 1px solid #eff2f7;
    opacity: 0;
    &-success {
      color: var(--primary-color);
    }
    &-warning {
      color: #e6a23c;
    }
    &-error {
      color: #f56c6c;
    }
    &-box {
      display: flex;
      align-items: center;
      .message-icon {
        margin-right: 5px;
      }
      .message-content {
        font-size: 14px;
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 400;
        color: #121212;
      }
    }
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
  @keyframes fadeOutUp {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }
  .message-enter {
    animation: fadeInDown 0.5s ease-in-out;
  }

  .message-enter-active {
    animation-fill-mode: forwards; /* 保持最终状态 */
  }

  .message-exit {
    animation: fadeOutUp 0.5s ease-in-out;
  }

  .message-exit-active {
    animation-fill-mode: forwards; /* 保持最终状态 */
    animation-delay: 2s; /* 设置延迟，等待2秒后执行淡出动画 */
  }
`
