import React, { useEffect, useState } from "react";
import AGD from "./About-Game-Details"
import { useWallet } from "../hooks/useWallet";
import { useWalletModal } from "../hooks/useWalletModal";
import WalletModal from "./WalletModal/WalletModal";
import { NotificationManager } from "react-notifications";
import {
    tokenContract, presaleContract
} from "../contracts";
import { ethers } from "ethers";
import { toBigNum } from "../utils";
export default function MainFlex() {
    const { active, account, library } = useWallet();
    const { toggleOpen } = useWalletModal();
    const [bscAmount, setBSCAmount] = useState(0);
    const [shibaAmount, setShibaAmount] = useState(0);
    const [tokenPrice, setTokenPrice] = useState(1000);
    const [shibaBalance, setShibaBalance] = useState(0);
    const [signer, setSigner] = useState("");

    useEffect(() => {
        const getSigner = async () => {
            if (active) {
                const signer = await library.getSigner();
                setSigner(signer);
            }
        };
        getSigner();
    }, [active]);


    useEffect(() => {
        const getPrice = async () => {
            let price = await presaleContract.getPrice();
            setTokenPrice(price);
        };
        getPrice();
    }, []);

    useEffect(() => {
        const getBalance = async () => {
            if (active && account) {
                let balance = await tokenContract.balanceOf(account);
                setShibaBalance(balance);
            } else {
                setShibaBalance(0);
            }
        };
        getBalance();
    }, [active]);


    const onBuy = async () => {
        try {
            if (bscAmount == 0) {
                NotificationManager.error("Please input BNB amount");
            }
            let bnbAmount = bscAmount;
            console.log("signer", signer);
            var signedPresaleContract = presaleContract.connect(signer);
            let prov = ethers.getDefaultProvider();
            const balance = await prov.getBalance(account);
            let estimatedPrice = Number(balance) - toBigNum(0.0003, 18) * 1e18;
            if (estimatedPrice > toBigNum(bnbAmount, 18)) {
                
              }

            console.log("Balance",balance);

            console.log("amount", toBigNum(bnbAmount, 18));
            var tx = await signedPresaleContract.buy({ value: toBigNum(bnbAmount, 18) });
            await tx.wait();
            NotificationManager.success("Buy Success");
        } catch (error) {
            console.log("error", error);
        }

    }
    const onBscChange = (e) => {
        if (e.target.value === "") {
            setBSCAmount(0)
            setShibaAmount(0);
        } else {
            setShibaAmount(e.target.value * tokenPrice);
            setBSCAmount(e.target.value);
        }
    }

    const onShibaChange = (e) => {
        if (e.target.value === "") {
            onBscChange(0);
            onShibaChange(0);
        } else {
            setBSCAmount(e.target.value / tokenPrice);
            setShibaAmount(e.target.value);
        }
    }


    return <>
        <WalletModal />
        <AGD />
        <section className="padding-top padding-bottom">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <div className="game-details-left">
                            <div id="coin-flip-cont">
                                <div className="coins-wrapper">
                                    <div className="front"><img src="assets/images/game/shiba.png" alt="game" /></div>
                                    <div className="back"><img src="assets/images/game/bnb.png" alt="game" /></div>
                                </div>
                            </div>
                            <div className="cd-ft"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="game-details-right">
                            {active && shibaBalance ? (
                                <>
                                    <h3 className="mb-4 text-center">Current Balance : <span className="base--color"><span className="bal">{Number(shibaBalance)}</span> LShiba</span></h3>
                                </>
                            ) : (
                                <h3 className="mb-4 text-center">Please connect wallet</h3>
                            )}

                            <form id="game">

                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <input type="number" step="0.000001" value={parseFloat(bscAmount)} onChange={onBscChange} className="form-control form--control amount-field" placeholder="Enter BNB amount" />
                                        <span className="input-group-text text-white bg--base" id="basic-addon2">BNB</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" step="1" onChange={onShibaChange} value={parseFloat(shibaAmount)} name="invest" className="form-control form--control amount-field" placeholder="Enter LShiba amount" />
                                        <span className="input-group-text text-white bg--base" id="basic-addon2">LShiba</span>
                                    </div>
                                    {/* <small className="form-text text-muted"><i className="fas fa-info-circle mr-2"></i>Minimum: 1 USD | Maximum: 500.00 USD | <span className="text-warning">Win Amount  1  %</span></small> */}
                                </div>
                                <div className="form-group mt-4 mt-sm-5 justify-content-center d-flex flex-wrap justify-content-between">
                                    <div className="single-select head gmimg active">
                                        <div className="back"><img src="assets/images/game/bnb.png" alt="game" /></div>

                                    </div>
                                    <div className="single-select tail gmimg">
                                        <div className="front"><img src="assets/images/game/shiba.png" alt="game" /></div>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-5 text-center">

                                {active ? (
                                    <button onClick={onBuy} className="cmn--btn active w-100 text-center">Buy LShiba</button>

                                ) : (
                                    <button onClick={toggleOpen} className="cmn--btn active w-100 text-center">Connect Wallet</button>
                                )}
                                <a href="!#" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className="mt-3 btn btn-link btn--sm radius-5">Game Instruction <i className="las la-info-circle"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="game-section padding-top padding-bottom bg_img" style={{ background: " url(assets/images/game/bg3.jpg)" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-6">
                        <div className="section-header text-center">
                            <h2 className="section-header__title">You may Also Like</h2>
                            <p>Id temporibus blanditiis culpa laborum debitis ex et libero corrupti, recusandae ab voluptate? Magni, impedit.</p>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                        <div className="game-item">
                            <div className="game-inner">
                                <div className="game-item__thumb">
                                    <img src="assets/images/game/item2.png" alt="game" />
                                </div>
                                <div className="game-item__content">
                                    <h4 className="title">Roulette</h4>
                                    <p className="invest-info">Invest Limit</p>
                                    <p className="invest-amount">$10.49 - $1,000</p>
                                    <a href="#0" className="cmn--btn active btn--md radius-0">Play Now</a>
                                </div>
                            </div>
                            <div className="ball"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                        <div className="game-item">
                            <div className="game-inner">
                                <div className="game-item__thumb">
                                    <img src="assets/images/game/item1.png" alt="game" />
                                </div>
                                <div className="game-item__content">
                                    <h4 className="title">Zero To Ninty</h4>
                                    <p className="invest-info">Invest Limit</p>
                                    <p className="invest-amount">$10.49 - $1,000</p>
                                    <a href="#0" className="cmn--btn active btn--md radius-0">Play Now</a>
                                </div>
                            </div>
                            <div className="ball"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                        <div className="game-item">
                            <div className="game-inner">
                                <div className="game-item__thumb">
                                    <img src="assets/images/game/item3.png" alt="game" />
                                </div>
                                <div className="game-item__content">
                                    <h4 className="title">Number Buy</h4>
                                    <p className="invest-info">Invest Limit</p>
                                    <p className="invest-amount">$10.49 - $1,000</p>
                                    <a href="#0" className="cmn--btn active btn--md radius-0">Play Now</a>
                                </div>
                            </div>
                            <div className="ball"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                        <div className="game-item">
                            <div className="game-inner">
                                <div className="game-item__thumb">
                                    <img src="assets/images/game/item4.png" alt="game" />
                                </div>
                                <div className="game-item__content">
                                    <h4 className="title">Roulette</h4>
                                    <p className="invest-info">Invest Limit</p>
                                    <p className="invest-amount">$10.49 - $1,000</p>
                                    <a href="#0" className="cmn--btn active btn--md radius-0">Play Now</a>
                                </div>
                            </div>
                            <div className="ball"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div className=" modal custom--modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-modal="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content section-bg border-0">
                    <div className="modal-header modal--header bg--base">
                        <h4 className="modal-title text-dark" id="exampleModalLongTitle">Game Rules</h4>
                    </div>
                    <div className="modal-body modal--body">
                        <h3 className="title mb-2">Before Game Start: </h3>
                        <p>Officia quod velit eaque tempore assumenda, blanditiis corporis praesentium voluptate provident. Sunt enim obcaecati odio doloremque molestiae aspernatur fuga eveniet molestias autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam sapiente aut est nostrum, labore quibusdam aliquid repellendus dignissimos consequuntur aspernatur voluptates consectetur aliquam quam nesciunt impedit? Vitae blanditiis vero officiis quidem ipsum esse! Praesentium, laudantium numquam! Corporis sed adipisci, incidunt aut, accusamus sit, nihil tenetur ipsam quaerat optio nisi?</p>
                    </div>
                    <div className="modal-footer modal--footer">
                        <button type="button" className="btn btn--danger btn--md" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> </>
}