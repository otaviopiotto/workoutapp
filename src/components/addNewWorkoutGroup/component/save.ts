//   const mouseMoveHandler = (e: any) => {
//     containerRef.current.style.zIndex = 2;
//     const dx = e.changedTouches[0].clientY - pos.y;

//     if (dx > -70 && dx < 70) {
//       containerRef.current.style.top = dx + "px";
//     }

//     if (dx < 0) {
//       const downToArr = Math.abs(Math.round(dx / 100)) - day;
//       const position = downToArr < 0 ? 0 : downToArr;

//       if (dx < -80) {
//         containerRef.current.style.order = downToArr;
//         containerRef.current.style.top = dx + 20 + "px";

//         moveState = {
//           childPosition: day - 1,
//           arrayP: position,
//         };
//       }
//     } else {
//       const upToArr = Math.abs(Math.round(dx / 100)) + day;
//       const position = upToArr > listLength - 1 ? listLength - 1 : upToArr;

//       if (dx > 80) {
//         containerRef.current.style.order = upToArr;
//         containerRef.current.style.top = dx - 20 + "px";

//         moveState = {
//           childPosition: day - 1,
//           arrayP: position,
//         };
//       }
//     }
//   };

//   const mouseDownHandler = (e: any) => {
//     setTimeout(() => {
//       if (containerRef.current.parentElement.clientHeight > 89 * 2) {
//         setHoldingAnim(true);
//         pos = {
//           top: containerRef?.current?.scrollTop,
//           y: e.changedTouches[0].clientY,
//         };
//         document.addEventListener("touchmove", mouseMoveHandler);
//         document.addEventListener("touchend", mouseUpHandler);
//       }
//     }, 600);
//   };

//   const mouseUpHandler = () => {
//     setHoldingAnim(false);
//     setMoving(moveState);
//     containerRef.current.style.top = 0;
//     containerRef.current.style.zIndex = 0;
//     containerRef.current.style.gridArea = "auto";
//     document.removeEventListener("touchmove", mouseMoveHandler);
//     document.removeEventListener("touchend", mouseUpHandler);
//   };
export default [];
