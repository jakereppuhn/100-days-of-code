import { Button, Layout } from "../components";

const Home = () => {
  return (
    <Layout>
      <div className="flex gap-2">
        <Button
          type="button"
          text="Theme One"
          onClick={() => {}}
          theme="full"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
        />
        <Button
          type="button"
          text="Theme One"
          onClick={() => {}}
          theme="full"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
          isLoading={true}
        />
        <Button
          type="button"
          text="Theme Two"
          onClick={() => {}}
          theme="outline"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
        />
        <Button
          type="button"
          text="Theme Two"
          onClick={() => {}}
          theme="outline"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
          isLoading={true}
        />
        <Button
          type="button"
          text="Disabled"
          onClick={() => {}}
          theme="outline"
          isDisabled={true}
        />
        <Button type="button" text="No Icon" onClick={() => {}} theme="full" />
        <Button
          type="link"
          text="Link"
          theme="full"
          destination="https://youtu.be/dQw4w9WgXcQ?si=qS9uicPVYe21HMzM"
        />
      </div>
    </Layout>
  );
};

export default Home;
