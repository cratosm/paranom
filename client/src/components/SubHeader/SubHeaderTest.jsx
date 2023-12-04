import ParanomBoomrang from "../../assets/Gif/ParanomBoomrang.gif";
import amber from "../../assets/Image/Amber F.png";
import amberH from "../../assets/Image/Amber H.png";


export const SubHeaderTest = () => {
    return (
        <div className="max-w-auto overflow-hidden h-screen">
            <div className="md:flex space-x-96">
                <div className="max-w-8xl ml-60 p-2 ">
                    <div className="max-w-lg mx-auto px-4 py-16 ">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
                        <p className="mt-2 text-white">
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                        </p>
                    </div>
                </div>
                <div className="relative h-400">
                    <img src={ParanomBoomrang} width={300} height={300} className="rounded-full shadow-md" />
                    <img src={amber} width={150} height={300} className="absolute -mt-16 -ml-75 rounded-full shadow-md" />
                    <img src={amberH} width={150} height={300} className="absolute -mt-40 -ml-20 rounded-full shadow-md" />
                </div>
            </div>
        </div>
    )
}