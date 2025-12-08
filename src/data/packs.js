import amazon from "../assets/images/amazon-seg.png";
import coke from "../assets/images/coke-seg.png";
import meta from "../assets/images/meta-seg.png";
import netflix from "../assets/images/netflix-seg.png";
import spotify from "../assets/images/spotify-seg.png";
import misfits from "../assets/images/misfits-seg.png";
import sonos from "../assets/images/sonos-seg.png";
import venmo from "../assets/images/venmo-seg.png";
import soen from "../assets/images/soen-seg.png";
import soenFull from "../assets/images/soen-landscape.jpg";
import soenVideo from "../assets/videos/soen-video.mp4";
import chrome from "../assets/videos/chrome-seg.mp4";
import df from "../assets/videos/d-and-f-seg.mp4";
import elisa from "../assets/videos/elisa-seg.mp4";
import pen from "../assets/videos/pen-seg.mp4";
import spirit from "../assets/images/spirit-seg.gif";
import headspace from "../assets/images/headspace-seg.gif";
import duo from "../assets/images/duo-seg.gif";
import discord from "../assets/images/discord-seg.gif";
import bolt from "../assets/videos/bolt-seg.mp4";
import chanel from "../assets/videos/chanel-seg.mp4";
import girl from "../assets/videos/girl-seg.mp4";
import going from "../assets/videos/going-seg.mp4";
import luke from "../assets/videos/luke-seg.mp4";
import nike from "../assets/videos/nike-seg.mp4";
import tabler from "../assets/videos/tabler-seg.mp4";
import pera from "../assets/videos/pera.mp4";

const dummyImage = "/images/dummy-image.jpg";
export const packs = [
  {
    id: "brand",
    segments: [
      {
        id: "0",
        images: [
          {
            id: "b0-1",
            src: headspace,
            style: { top: "30%", left: "0%" },
            orientation: "horizontal",
            desktopOrientation: "portrait",
          },
          {
            id: "b0-2",
            src: soenVideo,
            type: "video",
            style: { top: "0%", left: "35%" },
            orientation: "vertical-alt",
            desktopOrientation: "square",
          },
          {
            id: "b0-3",
            type: "video",
            src: df,
            style: { bottom: "10%", left: "50%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
          },
          {
            id: "b0-4",
            src: elisa,
            type: "video",
            style: { top: "27%", right: "10%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
      {
        id: "1",
        images: [
          {
            id: "b1-1",
            src: chanel,
            type: "video",
            style: { top: "50%", left: "10%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "b1-2",
            type: "video",
            src: going,
            style: { top: "0%", left: "30%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
          {
            id: "b1-3",
            src: spirit,
            style: { top: "40%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "b1-4",
            type: "video",
            src: soenVideo,
            style: { top: "0%", left: "70%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
          },
        ],
      },
      {
        id: "2",
        images: [
          {
            id: "b2-1",
            src: girl,
            type: "video",
            style: { top: "5%", left: "0%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
          },
          {
            id: "b2-2",
            src: nike,
            type: "video",
            style: { top: "30%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "b2-3",
            src: tabler,
            type: "video",
            style: { top: "10%", right: "0%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "b2-4",
            src: misfits,
            style: { top: "50%", left: "25%" },
            orientation: "vertical-alt",
            desktopOrientation: "square",
            odd: true,
          },
        ],
      },
    ],
  },

  {
    id: "digital",
    segments: [
      {
        id: "0",
        images: [
          {
            id: "d0-1",
            src: luke,
            type: "video",
            style: { top: "30%", left: "70%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "d0-2",
            src: headspace,
            style: { top: "50%", left: "0%" },
            orientation: "horizontal",
            desktopOrientation: "portrait",
            odd: true,
          },
          {
            id: "d0-3",
            src: elisa,
            type: "video",
            style: { top: "20%", left: "20%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "d0-4",
            src: duo,
            style: { top: "50%", left: "35%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
      {
        id: "1",
        images: [
          {
            id: "d1-1",
            src: df,
            type: "video",
            style: { top: "60%", left: "40%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "d1-2",
            src: misfits,
            style: { top: "40%", right: "0%" },
            orientation: "vertical-alt",
            desktopOrientation: "portrait",
            odd: true,
          },
          {
            id: "d1-3",
            src: girl,
            type: "video",
            style: { top: "30%", left: "12%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "d1-4",
            src: headspace,
            style: { top: "20%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
    ],
  },

  {
    id: "companies",
    segments: [
      {
        id: "0",
        images: [
          {
            id: "c0-1",
            src: netflix,
            style: { top: "40%", left: "20%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "c0-2",
            src: spotify,
            style: { top: "30%", left: "60%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
          {
            id: "c0-3",
            src: amazon,
            style: { top: "5%", left: "40%" },
            orientation: "square",
            desktopOrientation: "square",
          },
          {
            id: "c0-4",
            src: soen,
            style: { top: "10%", right: "0%" },
            orientation: "vertical",
            desktopOrientation: "square",
            odd: true,
          },
        ],
      },
      {
        id: "1",
        images: [
          {
            id: "c1-1",
            src: sonos,
            style: { top: "20%", right: "0%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "c1-2",
            src: soen,
            style: { top: "20%", left: "30%" },
            orientation: "vertical",
            desktopOrientation: "square",
            odd: true,
          },
          {
            id: "c1-3",
            src: coke,
            style: { top: "60%", left: "10%" },
            orientation: "square",
            desktopOrientation: "square",
          },
          {
            id: "c1-4",
            src: meta,
            style: { top: "5%", left: "0%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
            odd: true,
          },
        ],
      },
      {
        id: "2",
        images: [
          {
            id: "c2-1",
            src: venmo,
            style: { top: "40%", left: "20%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "c2-2",
            src: discord,
            style: { top: "30%", left: "50%" },
            orientation: "square",
            desktopOrientation: "square",
            odd: true,
          },
          {
            id: "c2-3",
            src: coke,
            style: { top: "70%", left: "0%" },
            orientation: "square",
            desktopOrientation: "square",
          },
          {
            id: "c2-4",
            src: soenFull,
            style: { top: "10%", right: "0%" },
            orientation: "vertical-alt",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
    ],
  },

  {
    id: "founders",
    segments: [
      {
        id: "0",
        images: [
          {
            id: "f0-1",
            src: misfits,
            style: { top: "10%", left: "50%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
          },
          {
            id: "f0-2",
            src: going,
            type: "video",
            style: { top: "40%", left: "30%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
          {
            id: "f0-3",
            src: chrome,
            type: "video",
            style: { top: "0%", right: "0%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "f0-4",
            src: venmo,
            style: { top: "50%", left: "10%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
            odd: true,
          },
        ],
      },
      {
        id: "1",
        images: [
          {
            id: "f1-1",
            src: duo,
            style: { top: "5%", left: "10%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "f1-2",
            src: meta,
            style: { top: "30%", right: "0%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
            odd: true,
          },
          {
            id: "f1-3",
            src: pera,
            type: "video",
            style: { top: "40%", left: "10%" },
            orientation: "vertical-alt",
            desktopOrientation: "square",
          },
          {
            id: "f1-4",
            src: sonos,
            style: { top: "50%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
      {
        id: "2",
        images: [
          {
            id: "f2-1",
            src: bolt,
            type: "video",
            style: { top: "30%", left: "10%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
          },
          {
            id: "f2-2",
            src: pen,
            type: "video",
            style: { top: "30%", right: "0%" },
            orientation: "vertical",
            desktopOrientation: "portrait",
            odd: true,
          },
          {
            id: "f2-3",
            type: "video",
            src: soenVideo,
            style: { top: "40%", left: "60%" },
            orientation: "vertical-alt",
            desktopOrientation: "square",
          },
          {
            id: "f2-4",
            src: elisa,
            type: "video",
            style: { top: "0%", left: "50%" },
            orientation: "horizontal",
            desktopOrientation: "landscape",
            odd: true,
          },
        ],
      },
    ],
  },
];
