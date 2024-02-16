"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import { api } from "@/utils/api/api";

import { Card, Container, Spinner, Step } from "@/ui";

import invite from "@/public/assets/invite.svg";
import collectCoins from "@/public/assets/collect-coins.svg";
import voucher from "@/public/assets/voucher.svg";
import email from "@/public/assets/email.svg";
import success from "@/public/assets/success.svg";

import styles from "./main-content.module.scss";

type Inputs = {
  email: string;
};

const INITIAL_VALUES: Inputs = {
  email: "",
};

const stepsData = [
  {
    imageSrc: invite,
    header: "INVITE FRIENDS",
    description: "Refer friends with your unique referral link.",
  },
  {
    imageSrc: collectCoins,
    header: "COLLECT COINS",
    description: "Get 1 coin for each friend that installs using your link.",
  },
  {
    imageSrc: voucher,
    header: "GET VOUCHER",
    description: "Redeem for a $20 voucher once you collect 20 coins.",
  },
];

export function MainContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<Inputs>({ defaultValues: INITIAL_VALUES, mode: "onSubmit" });

  const onSubmit: SubmitHandler<Inputs> = async ({ email }) => {
    setIsSuccess(false);
    setIsLoading(true);

    api({ email })
      .then(() => setIsSuccess(true))
      .catch(() => setIsSuccess(false))
      .finally(() => setIsLoading(false));

    reset(INITIAL_VALUES);
  };

  return (
    <main className={styles.mainContentContainer}>
      <Container>
        <div className={styles.mainContent}>
          <Card>
            <div className={styles.cardContent}>
              <div>
                <h1 className={styles.cardHeader}>
                  REFER FRIENDS AND GET REWARDS
                </h1>
                <p className={styles.cardDescription}>
                  Refer your friends to us and earn hotel booking vouchers.
                  We&#39;ll give you 1 coin for each friend that installs our
                  extension. Minimum cash-out at 20 coins.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {isSuccess && !isDirty && (
                    <span className={styles.success}>
                      <Image src={success} alt="Success icon" />
                      Your email is confirmed!
                    </span>
                  )}
                  {errors.email && (
                    <span className={styles.error}>{errors.email.message}</span>
                  )}
                  <div className={styles.inputContainer}>
                    <Image
                      src={email}
                      alt="email icon"
                      className={styles.emailIcon}
                    />
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className={styles.emailInput}
                      {...register("email", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.button}
                    disabled={isLoading}>
                    {isLoading ? <Spinner /> : "Get Referral Link"}
                  </button>
                </form>
              </div>
              <div>
                <p className={styles.cardDisclaimer}>
                  Limits on max rewards apply.
                </p>
              </div>
            </div>
          </Card>
          <div className={styles.steps}>
            {stepsData.map((step, index) => (
              <Step key={index} index={index} {...step} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
