import FileSaver from "file-saver"

export async function downloadImage({
  _id,
  photo,
}: Pick<TPostData, "_id" | "photo">) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}