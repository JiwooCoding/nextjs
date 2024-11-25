import BookPage from "@/app/book/[id]/page"
import Modal from "@/components/modal"

const Page = (props:any) => {

    console.log(props)

    return (
        <Modal>
            <BookPage {...props}/>
        </Modal>
    )
}

export default Page