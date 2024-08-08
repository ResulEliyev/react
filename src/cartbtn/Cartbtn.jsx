import Flex from "../components/Flex";

export default ({ children, onClick, prefix, suffix }) => {
  const classes="border border-black p-[6px_12px] rounded hover:bg-[#333] hover:text-white hover:duration-500 ease-in-out"
  const clas="border border-black p-[6px_12px] rounded"
  return  (
    <Flex
      as="button"
      onClick={onClick}
      gap={10}
      className={classes}
    >
      {prefix && prefix}
      {children}
      {suffix && suffix}
    </Flex>
  )
};
// const classCount = "bg-black text-white rounded-full px-[6px]"
