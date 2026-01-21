import { useState } from "react";

const TestPage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Test Page</h2>
      <p>버튼 클릭 횟수: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        +1 증가
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setCount(0)}
      >
        초기화
      </button>
    </div>
  );
};

export default TestPage;
