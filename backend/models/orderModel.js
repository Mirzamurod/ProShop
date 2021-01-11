import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'User',
        },
        orderItems: [
            {
                name: {
                    type: String,
                    require: true,
                },
                qty: {
                    type: Number,
                    require: true,
                },
                image: {
                    type: String,
                    require: true,
                },
                price: {
                    type: Number,
                    require: true,
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    require: true,
                    ref: 'Product',
                },
            },
        ],
        shoppingAddress: {
            address: {
                type: String,
                require: true,
            },
            city: {
                type: String,
                require: true,
            },
            pastalCode: {
                type: String,
                require: true,
            },
            country: {
                type: String,
                require: true,
            },
        },
        paymentMethod: {
            type: String,
            require: true,
        },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String }
        },
        taxPrice: {
            type: Number,
            require: true,
            default: 0.0
        },
        shippingPrice: {
            type: Number,
            require: true,
            default: 0.0
        },
        totalPrice: {
            type: Number,
            require: true,
            default: 0.0
        },
        isPaid: {
            type: Boolean,
            require: true,
            default: false
        },
        paitAt: {
            type: Date
        },
        isDelivered: {
            type: Boolean,
            require: true,
            defalut: false
        },
        deliveredAt: {
            type: Date
        }
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
