export default function Footer() {
    return (
        <div className="px-[10%] py-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row flex-wrap gap-4 justify-center">
                    <a className="link link-hover" href=""><p className="text-sm">Conditions of Use</p></a>
                    <a className="link link-hover" href=""><p className="text-sm">Privacy Notice</p></a>
                    <a className="link link-hover" href=""><p className="text-sm">Consumer Health Data Privacy Disclosure</p></a>
                    <a className="link link-hover" href=""><p className="text-sm">Your Ads Privacy Notice</p></a>
                </div>
                <p className="place-self-center text-sm">© 2025, hopshop.com, Inc. or its affiliates</p>
            </div>
        </div>
    );
}