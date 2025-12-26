import { useCallback, type Dispatch } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import type { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    dispatch: Dispatch<OrderActions>
    order: OrderItem[],
    tip: number
}

export default function OrderTotals({ dispatch, order, tip }: OrderTotalsProps) {
    const subtotalAmout = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
    const tipAmout = useCallback(() => subtotalAmout() * tip, [tip,order]);
    const totalAmount = useCallback(() => subtotalAmout() + tipAmout(), [tip,order]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmout())}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmout())}</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>
            </div>
            <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalAmount() === 0}
            onClick={() => dispatch({type: 'place-order'})}>
                Guardar Orden
            </button>
        </>
    )
}
