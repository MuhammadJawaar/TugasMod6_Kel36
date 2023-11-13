import { Fragment } from "react";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import members from "../data/ProfileData"; // Import data dari data.js
import "./Profile.css";

export default function Profile() {
    return (
        <>
        <p id="movies">Anggota Kelompok 36</p>
        {members.map((member, index) => (
            <Fragment key={member.id}>
            <ProfileCard
                nama={member.nama}
                nim={member.nim}
                imageUrl={member.imageUrl}
                onClick={() => alert(member.nama)}
            />
            {members.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </>
    );
}
