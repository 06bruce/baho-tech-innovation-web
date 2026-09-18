import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Pencil, Plus, Trash2, BriefcaseBusiness, Users, Newspaper } from "lucide-react";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { contentService, type ContentItem, type ContentType } from "../../services/contentService";

const TYPE_LABELS: Record<ContentType, string> = {
  team: "Teams",
  project: "Projects",
  news: "Latest News & Projects",
};

const emptyForm = (type: ContentType = "team") => ({
  type,
  title: "",
  name: "",
  role: "",
  bio: "",
  description: "",
  content: "",
  image: "",
  imageAlt: "",
  link: "",
  location: "",
  tags: "",
  story: "",
  sortOrder: "0",
  isPublished: true,
});

export function AdminContentPage() {
  const { token } = useAuth();
  const [items, setItems] = useState<ContentItem[]>([]);
  const [type, setType] = useState<ContentType>("team");
  const [form, setForm] = useState(() => emptyForm("team"));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const filteredItems = useMemo(
    () => items.filter((item) => item.type === type),
    [items, type]
  );

  const loadContent = async () => {
    if (!token) return;
    try {
      setIsLoading(true);
      setError("");
      const response = await contentService.listAdmin(token);
      setItems(response.items);
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : "Failed to load admin content.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadContent();
  }, [token]);

  const resetForm = () => {
    setForm(emptyForm(type));
    setEditingId(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!token) return;

    try {
      setError("");
      const payload = {
        ...form,
        type,
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        story: form.story
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
        sortOrder: Number(form.sortOrder || 0),
      };

      if (editingId) {
        await contentService.update(token, editingId, payload);
        setSuccess(`${TYPE_LABELS[type]} updated.`);
      } else {
        await contentService.create(token, payload);
        setSuccess(`${TYPE_LABELS[type]} created.`);
      }

      resetForm();
      await loadContent();
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : "Could not save content.");
    }
  };

  const handleEdit = (item: ContentItem) => {
    setType(item.type);
    setEditingId(item.id);
    setForm({
      type: item.type,
      title: item.title || "",
      name: item.name || "",
      role: item.role || "",
      bio: item.bio || "",
      description: item.description || "",
      content: item.content || "",
      image: item.image || "",
      imageAlt: item.imageAlt || "",
      link: item.link || "",
      location: item.location || "",
      tags: item.tags.join(", "),
      story: item.story.join("\n"),
      sortOrder: String(item.sortOrder ?? 0),
      isPublished: item.isPublished,
    });
  };

  const handleDelete = async (id: string) => {
    if (!token || !window.confirm("Delete this item?")) return;

    try {
      setError("");
      await contentService.remove(token, id);
      setSuccess("Item deleted.");
      await loadContent();
      if (editingId === id) resetForm();
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : "Could not delete item.");
    }
  };

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => { setType("team"); resetForm(); }}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold ${type === "team" ? "bg-[#1A4F8D] text-white" : "bg-[#eef5f9] text-[#1A4F8D]"}`}
          >
            <Users className="h-4 w-4" /> Team
          </button>
          <button
            type="button"
            onClick={() => { setType("project"); resetForm(); }}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold ${type === "project" ? "bg-[#1A4F8D] text-white" : "bg-[#eef5f9] text-[#1A4F8D]"}`}
          >
            <BriefcaseBusiness className="h-4 w-4" /> Projects
          </button>
          <button
            type="button"
            onClick={() => { setType("news"); resetForm(); }}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold ${type === "news" ? "bg-[#1A4F8D] text-white" : "bg-[#eef5f9] text-[#1A4F8D]"}`}
          >
            <Newspaper className="h-4 w-4" /> News
          </button>
        </div>

        {error && <FormAlert tone="error">{error}</FormAlert>}
        {success && <FormAlert tone="success">{success}</FormAlert>}

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-gray-800">Title</span>
            <input
              value={form.title}
              onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
              className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
              placeholder={type === "team" ? "Team member name" : type === "project" ? "Project title" : "News title"}
            />
          </label>

          {type === "team" && (
            <>
              <label>
                <span className="mb-1 block text-sm font-semibold text-gray-800">Name</span>
                <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
              </label>
              <label>
                <span className="mb-1 block text-sm font-semibold text-gray-800">Role</span>
                <input value={form.role} onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))} className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
              </label>
            </>
          )}

          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-gray-800">Description</span>
            <textarea
              value={form.description}
              onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
            />
          </label>

          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-gray-800">Full content / story</span>
            <textarea
              value={form.content}
              onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
              rows={5}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
            />
          </label>

          <label>
            <span className="mb-1 block text-sm font-semibold text-gray-800">Image URL</span>
            <input value={form.image} onChange={(event) => setForm((current) => ({ ...current, image: event.target.value }))} className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
          </label>
          <label>
            <span className="mb-1 block text-sm font-semibold text-gray-800">Image alt text</span>
            <input value={form.imageAlt} onChange={(event) => setForm((current) => ({ ...current, imageAlt: event.target.value }))} className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
          </label>

          <label>
            <span className="mb-1 block text-sm font-semibold text-gray-800">Link</span>
            <input value={form.link} onChange={(event) => setForm((current) => ({ ...current, link: event.target.value }))} className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
          </label>
          <label>
            <span className="mb-1 block text-sm font-semibold text-gray-800">Location</span>
            <input value={form.location} onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))} className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
          </label>

          <label>
            <span className="mb-1 block text-sm font-semibold text-gray-800">Tags</span>
            <input value={form.tags} onChange={(event) => setForm((current) => ({ ...current, tags: event.target.value }))} className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
          </label>
          <label>
            <span className="mb-1 block text-sm font-semibold text-gray-800">Sort order</span>
            <input value={form.sortOrder} onChange={(event) => setForm((current) => ({ ...current, sortOrder: event.target.value }))} className="h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
          </label>

          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-gray-800">Story paragraphs (one per line)</span>
            <textarea
              value={form.story}
              onChange={(event) => setForm((current) => ({ ...current, story: event.target.value }))}
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
            />
          </label>

          <label className="flex items-center gap-3 md:col-span-2">
            <input type="checkbox" checked={form.isPublished} onChange={(event) => setForm((current) => ({ ...current, isPublished: event.target.checked }))} />
            <span className="text-sm font-medium text-gray-700">Published</span>
          </label>

          <div className="md:col-span-2 flex justify-end gap-3">
            <button type="button" onClick={resetForm} className="rounded-full border border-gray-300 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50">Reset</button>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-5 py-2.5 font-semibold text-white hover:bg-[#1C5B78]">
              <Plus className="h-4 w-4" /> {editingId ? "Save changes" : `Add ${TYPE_LABELS[type]}`}
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-2xl font-semibold text-gray-950">{TYPE_LABELS[type]} list</h3>
        {isLoading ? (
          <FormAlert tone="info">Loading {TYPE_LABELS[type].toLowerCase()}...</FormAlert>
        ) : filteredItems.length === 0 ? (
          <FormAlert tone="info">No {TYPE_LABELS[type].toLowerCase()} items yet.</FormAlert>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-[#F5F7FA] p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold text-gray-950">{item.title || item.name}</p>
                  <p className="text-sm text-gray-600">{item.role || item.description || "No summary"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => handleEdit(item)} className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-white">
                    <Pencil className="h-4 w-4" /> Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(item.id)} className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100">
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
