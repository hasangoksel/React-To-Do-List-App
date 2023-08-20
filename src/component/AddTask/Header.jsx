import Card from "../UI/Card";
import Button from "../UI/Button";

const Header = (props) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const date = day + "/" + month + "/" + year;

  return (
    <Card className="p-12">
      <header className="flex flex-row font-normal">
        <div className="flex flex-row basis-1/2">
          <span className="basis-1/2">{date}</span>
          <span className="basis-1/2 text-[28px]">To-Do List</span>
        </div>
        <div className="flex basis-1/2 justify-end">
          <Button onClick={() => props.setIsOpen(true)} className={"w-56 rounded-lg"}>Yeni Görev Ekle</Button>
        </div>
      </header>
    </Card>
  );
};

export default Header;
