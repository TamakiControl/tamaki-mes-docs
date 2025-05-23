# Document Model Overview

The **Document** models are used to represent the structure of documents. They are used to define the structure of documents in
a way that is independent of the actual content of the document. This allows for the creation of documents that are consistent
in structure and layout, regardless of the content that is added to them. This model consists of the following primary entities:

---

### 1. DocumentData

Represents the data of documents within the database. The table contains the actual data
of the documents, the status and version of the file and the document_id that links it to a **Documents** entity
that contains the metadata of the document.

### 2. Documents

Represents specific documents within the database. The table contains metadata on uploaded documents
such as the name, document type, latest version, and the unique path needed to reach the document in the database.

---

The **Document** defines the structure and layout of documents, independent of their content. By focusing on the document's
framework rather than its specific information, these models ensure consistency in design and organization, enabling the
creation of standardized documents regardless of the data or text included.
