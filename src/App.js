import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./App.scss";
import { NextHeader } from "./components/NextHeader";
import { NextFooter } from "./components/NextFooter";
import { RakutenHeader } from "./components/RakutenHeader";
import { RakutenFooter } from "./components/RakutenFooter";
function App() {
    const [isNext, setIsNext] = useState(false);
    const [timeLeft, setTimeLeft] = useState(90);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    setIsNext((prev) => !prev);
                    return 90;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };
    return (_jsxs("div", { children: [_jsx(NextHeader, { isVisible: isNext }), _jsx(RakutenHeader, { isVisible: !isNext }), _jsxs("div", { className: "content", children: [_jsx("p", { className: "placeholder", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a in iusto. Alias eaque hic veniam facilis suscipit vitae. At id fugit facere iusto. Alias eaque hic veniam facilis suscipit vitae. At id fugit facere recusandae, deserunt eaque suscipit? Sed aspernatur necessitatibus ab cumque consequuntur magni, tempore soluta neque culpa, sunt eos cumque consequuntur magni, tempore soluta neque culpa, sunt eos cumque consequuntur magni, tempore soluta neque culpa, sunt eos cumque consequuntur magni, tempore soluta neque culpa, sunt eos praesentium. A provident consectetur similique corporis tempore, veritatis id enim sint quos fugit reprehenderit, optio, aperiam voluptates. Sed deserunt repudiandae perferendis ipsam, nesciunt sunt voluptates. Sed deserunt repudiandae perferendis ipsam, nesciunt sunt voluptates. Sed deserunt repudiandae perferendis ipsam, nesciunt sunt ullam. Earum rem ipsa eveniet, animi culpa esse eum provident voluptatem ullam. Earum rem ipsa eveniet, animi culpa esse eum provident voluptatem sunt optio laborum vero expedita dignissimos aliquam!" }), _jsxs("div", { style: { textAlign: "center", margin: "20px 0", fontSize: "24px" }, children: ["Timer: ", formatTime(timeLeft)] }), _jsx("p", { className: "placeholder", children: "Magnam, obcaecati libero quod sint aliquid iste aut deleniti ut quae, ipsam, ducimus voluptatum consequuntur? Ea culpa nam quae doloribus ipsam, ducimus voluptatum consequuntur? Ea culpa nam quae doloribus itaque velit vitae adipisci officiis eos ex qui quaerat asperiores quasi libero dolorum saepe eius commodi minus modi. Quia impedit, obcaecati libero dolorum saepe eius commodi minus modi. Quia impedit, obcaecati atque ipsa voluptas quo excepturi voluptate maiores corporis nesciunt, atque ipsa voluptas quo excepturi voluptate maiores corporis nesciunt, expedita ducimus recusandae? Delectus, culpa repudiandae a facilis hic expedita ducimus recusandae? Delectus, culpa repudiandae a facilis hic rem distinctio necessitatibus eveniet cumque? Debitis pariatur esse voluptatem, cupiditate nulla dolores reiciendis tempora delectus, fuga, voluptatem, cupiditate nulla dolores reiciendis tempora delectus, fuga, quia vitae earum nesciunt reprehenderit molestiae laudantium minima nemo quia vitae earum nesciunt reprehenderit molestiae laudantium minima nemo quia vitae earum nesciunt reprehenderit molestiae laudantium minima nemo obcaecati id quos sed maiores." })] }), _jsxs("div", { style: { position: "relative" }, children: [_jsx(NextFooter, { isVisible: isNext, scrollToTop: scrollToTop }), _jsx(RakutenFooter, { isVisible: !isNext, scrollToTop: scrollToTop })] })] }));
}
export default App;
