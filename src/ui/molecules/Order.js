import { useRef } from "react"
import Btn from "../atoms/Btn"
import Icon from "../atoms/Icon"
import Text from "../atoms/Text"

export default function Order({ orders, setOption, optionCurrent }) {
  const dialogRef = useRef(null)

  const openDialog = () => {
    dialogRef.current?.showModal()
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  const handleClick = (e) => {
    const id = e.currentTarget.dataset.id
    setOption(id)
    closeDialog()
  }

  const orderList = orders.map(order => (
    <li key={order.id}>
      <Btn
        dataId={order.type}
        onClick={handleClick}
        color="#e0e0e0"
      >
        <Text text={order.label} />
      </Btn>
    </li>
  ))

  return (
    <article>
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-800 text-sm text-gray-200 cursor-pointer hover:bg-neutral-700 transition"
        onClick={openDialog}
      >
        <Text text={optionCurrent} />
        <Icon name="ListOrdered" />
      </div>

      <dialog
        ref={dialogRef}
        className="rounded-xl p-4 bg-neutral-900 text-gray-100 shadow-xl backdrop:bg-black/50 ml-[85%] mt-[10%]"
      >
        <ul className="flex flex-col gap-2">
          {orderList}
        </ul>
        <form method="dialog" className="mt-3 text-right">
          <button className="text-sm text-gray-400 hover:text-gray-200">
            Cerrar
          </button>
        </form>
      </dialog>
    </article>
  )
}